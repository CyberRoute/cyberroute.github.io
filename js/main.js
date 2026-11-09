// Copy buttons on code blocks.
document.querySelectorAll('.prose pre').forEach(function (pre) {
  var host = pre.closest('.highlight') || pre;
  if (host.querySelector('.copy')) return;
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy';
  btn.textContent = 'copy';
  btn.addEventListener('click', function () {
    var code = pre.querySelector('code') || pre;
    var done = function (label) {
      btn.textContent = label;
      setTimeout(function () { btn.textContent = 'copy'; }, 1500);
    };
    if (!navigator.clipboard) return done('n/a');
    navigator.clipboard.writeText(code.innerText).then(
      function () { done('copied'); },
      function () { done('error'); }
    );
  });
  host.classList.add('has-copy');
  host.appendChild(btn);
});
