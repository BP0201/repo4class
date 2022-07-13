from typing import Any
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import InputRequired, Optional, URL, AnyOf, NumberRange


class PetForm(FlaskForm):

    name = StringField("Name", validators=[InputRequired()])
    species = StringField("Species", validators=[InputRequired(), AnyOf(['cat', 'dog', 'porcupine'])])
    photo_url = StringField("Image URL", validators=[Optional(), URL()])
    age = IntegerField("Age", validators=[InputRequired(), NumberRange(min=0, max=30)])
    notes = StringField("Notes")
    available = BooleanField("Is this pet available?")