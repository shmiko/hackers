var LookAndSayDisplayManager = (function() {

  function _Display() {
    _ClearPreviousOutput();
    var startTime = new Date().getTime();
    document.getElementById("startTime").innerHTML = startTime;

    if (_ValidateInput()) {
      var number = document.getElementById("number").value;
      var level = document.getElementById("level").value;
      var output = LookAndSayCalculator.Calculate(number, Number(level));

      for (var i = 0; i < output.length; i++) {
        document.getElementById("output").innerHTML += "<br>" + output[i];
      }
    }

    var endTime = new Date().getTime();
    document.getElementById("endTime").innerHTML = endTime;
    document.getElementById("time").innerHTML = endTime - startTime;
  }

  function _ClearPreviousOutput() {
    document.getElementById("startTime").innerHTML = "";
    document.getElementById("endTime").innerHTML = "";
    document.getElementById("time").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("errorMessage").innerHTML = "";
  }

  function _ValidateInput() {
    var number = document.getElementById("number").value;
    if (!_IsNumeric(number))
      document.getElementById("errorMessage").innerHTML = "Please enter a valid number.";
    var level = document.getElementById("level").value;
    if (!_IsNumeric(level))
      document.getElementById("errorMessage").innerHTML += "Please enter a valid level.";

    if (document.getElementById("errorMessage").innerHTML == "")
      return true;
    else
      return false;
  }

  function _IsNumeric(value) {
    return /^\d+$/.test(value);
  }

  return {
    Display: _Display
  }

})(LookAndSayDisplayManager || {});