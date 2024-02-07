let view = document.getElementById('view');
  
view.addEventListener('click', function() {
  let textArea = document.createElement('textarea');
  textArea.classList.add('edit')
  textArea.id = 'editableTextArea';
  textArea.value = view.innerHTML;
  view.replaceWith(textArea);
  textArea.focus();
  textArea.addEventListener('blur', function() {
    view.innerHTML = textArea.value;
    textArea.replaceWith(view);
  });
  
  textArea.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      view.innerHTML = textArea.value;
      textArea.replaceWith(view);
    }
  });
});