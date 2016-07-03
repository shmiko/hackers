var LookAndSayCalculator = (function() {
  
  function _Calculate(number, levels) {

    var _currrentLevel = 1;
    var _currentSequence = number.toString().split("");

    function _calculatenextSequence() {
      var nextSequence = [];
      var counter = 0;
      var currentChar = _currentSequence[0];
      for (var currentIndex = 0; currentIndex < _currentSequence.length; currentIndex++) {

        if (currentChar != _currentSequence[currentIndex]) {
          nextSequence.push(counter);
          nextSequence.push(currentChar);
          currentChar = _currentSequence[currentIndex];
          counter = 1;
        } else {
          counter++;
        }

        if (currentIndex == (_currentSequence.length - 1)) {
          nextSequence.push(counter);
          nextSequence.push(currentChar);
        }

      }

      return nextSequence;
    }

    function _GenerateOutput() {
      var output = [_currentSequence.join("")];

      while (_currrentLevel < levels) {
        _currentSequence = _calculatenextSequence();
        output.push(_currentSequence.join(""));
        _currrentLevel++;
      }

      return output;
    }

    return _GenerateOutput();
  }
  
  return{
  Calculate:_Calculate
  }
  
  })(LookAndSayCalculator||{});