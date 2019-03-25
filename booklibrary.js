
$(document).ready(function(){

// when addBook is clicked
var gridItemCount = 1;


    const addButtClicked = $('#addbut').click(function(){

      //logic for adding a new postit stamp to view;
      function gridItem(){
        var cloneGrid = $('#1').clone();
        gridItemCount++;
        //gives each gridItem a unique id
        cloneGrid.attr("id", gridItemCount);
        console.log(cloneGrid)
        //gives each gridItem a unique id for "x"; delete button
        cloneGrid.children("i").attr("id", 'x'+gridItemCount);
        // deletes value on clone post if post it 1 has values inside
        var parentOne = cloneGrid.children("p");
        var childOne = parentOne.children("textarea").val("");
        var updateContainer = cloneGrid.appendTo('.grid-container');
        //gives each gridItem a unique id for "x"; delete button

      };
      gridItem()
    });

    //logic for removing posititstamp;
    function deletePostit(){
    const deleteButtClicked = $(document).on('click', 'i', function(){
      $(this).parent().remove();
    });
  };
 deletePostit();
});
