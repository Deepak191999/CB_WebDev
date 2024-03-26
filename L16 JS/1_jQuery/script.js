// let btn= $('button')

// btn.click(()=>{
//     console.log("clicked")
// })

//-----------------------------------------------------------------


$("body")
  .append($("<input>").attr("placeholder", "EnterText"))
  .append(
    $("<button>")
      .text("Add Text")
      .click((e) => {
        $(".taskList").append(
          $("<li>")
            .text($("input").val())
            .append(
              $("<button>")
                .text("⬆️")
                .addClass("up")
                .click((ev) => {
                  $(ev.target)
                    .parent()
                    .insertBefore($(ev.target).parent().prev());
                })
            )
            .append(
              $("<button>")
                .text("⬇️")
                .addClass("down")
                .click((e) => {
                  $(e.target)
                    .parent()
                    .insertAfter($(e.target).parent().next());
                })
            )
            .append(
              $("<button>")
                .text("❌")
                .addClass("delete")
                .click((e) => {
                  $(e.target).parent().remove();
                })
            )
         )
         $('input').val("")

      })
  )
  .append($('<ul>')).addClass('taskList')
