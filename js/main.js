var findElementById = function (id) {
    return document.getElementById(id);
};
window.onload = function () {
    var left = findElementById('left-part'), right = findElementById('right-part');
    left.addEventListener('click', function () {
        window.location.href = 'http://github.com/dcalsky';
    });
    right.addEventListener('click', function () {
        window.location.href = 'http://blog.noddl.me';
    });
};
