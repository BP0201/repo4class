const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Job = require("../models/job");
const jobNewSchema = require("../schemas/jobNew.json");
const jobUpdateSchema = require("../schemas/jobUpdate.json");
const jobSearchSchema = require("../schemas/jobSearch.json");

const router = express.Router({ mergeParams: true });

// GET /: RETURN LIST OF ALL JOBS.

router.get('/', async (req, res, next) => {
    const q = req.query;

    if (q.minSalary !== undefined) q.minSalary = +q.minSalary
    q.hasEquity = q.hasEquity === "true"

    try {
        const validator = jsonschema.validate(q, jobSearchSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack)
            throw new BadRequestError(errs);
        }

        const jobs = await Job.findAll(q);
        return res.json({ jobs })

    } catch (e) {
        return next(e)
    }
})

// GET /:id : FIND JOB BY ID.

router.get("/:id", async (req, res, next) => {
    try {
        const job = await Job.get(req.params.id)
        return res.json({ job })

    } catch (e) {
        return next(e)
    }
})

// POST /: CREATE NEW JOB (ADMIN ONLY)

router.post("/", ensureAdmin, async (req, res, next) => {
    try {
        const validator = jsonschema.validate(req.body, jobNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs)
        }

        const job = await Job.create(req.body);
        return res.status(201).json({ job })

    } catch (e) {
        return next(e)
    }
})

// PATCH /:id : UPDATE EXISTING JOB (ADMIN ONLY)

router.patch("/:id", ensureAdmin, async (req, res, next) => {
    try {
        const validator = jsonschema.validate(req.body, jobUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs)
        }

        const job = await Job.update(req.params.id, req.body)
        return res.json({ job })
    } catch (e) {
        return next(e)
    }
})

// DELETE /:id : DELETE A ROUTE (ADMIN ONLY)

router.delete("/:id", ensureAdmin, async (req, res, next) => {
    try {
        await Job.remove(req.params.id);
        return res.json({ deleted: req.params.id })
        
    } catch (e) {
        return next(e)
    }
})



module.exports = router