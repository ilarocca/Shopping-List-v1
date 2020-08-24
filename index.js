$(function() {
    // adds item from entered text on click or return
    $("#js-shopping-list-form").submit(function(event) {
      event.preventDefault();
      const textInput = $(this).find("#shopping-list-entry");
      $(".shopping-list").append(`
        <li>
        <span class="shopping-item">${textInput.val()}</span>
           <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
        `
      );
     });
  // toggle check button
    $(".shopping-list").on("click", ".shopping-item-toggle", function()  {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    });
  // remove shopping list item
    $(".shopping-list").on("click", ".shopping-item-delete", function() {
      $(this).closest('li').remove('li');
    })
  })