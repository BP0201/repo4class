describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table list', function () {
    submitServerInfo();
    updateServerTable();

    expect(sumPaymentTotal('tipAmt') / Object.keys(allServers).length).toEqual(0);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    // teardown logic
  });
});

// Payments Tests
describe("Payment tests", function() {
  beforeEach(function (){
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  })


it("should return a bill with a tip", function() {
  submitPaymentInfo();

  expect(Object.keys(allPayments).length).toEqual(1);
})

it('should create current payment', function(){
let expectedPayment = {billAmt: '100', tipAmt: '20', tipPercent: 20}

expect(createCurPayment()).toEqual(expectedPayment);
});

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentId = 0;
    allPayments = {};
  })
});

// Helpers Tests
describe('Helpers Tests', function() {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it('should sum bill', function() {
    expect(sumPaymentTotal('billAmt')).toEqual(100);
  })

  it('should calculate tip percentage', function() {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);
  })  

  it('should generate new td', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });

  it('should remove items when clicked', function() {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.firstChild.innerText).toEqual('X');
  })

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentId = 0;
  });
})