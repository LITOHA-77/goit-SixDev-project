visible = false; //var that keeps track if the content is visible.
    txt = document.getElementById("text");
    btn = document.getElementById("btn");
    function toggle() {
        if (visible) {
            visible = 0;
            btn.innerHTML = 'Read more';
            txt.style.display = 'none';
        } else {
            visible = 1;
            btn.innerHTML = 'Less';
            txt.style.display = 'block';
        }
    }