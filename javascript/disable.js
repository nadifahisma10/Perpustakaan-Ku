<body oncontextmenu="return false;">
    <h3>welcome To Website</h3>
    <p>This is a sample website for learning.</p>
    <script>
        document.addEventListener ("contextmenu", function(event){
            document.onkeydown = function(e){
                // console.log(e.keyCode); // u = 85, i = 73, j = 74
                if(e.ctrlKey && e.keyCode == 85) {
                    alert("ctrl + u has been disabled");
                    return false;
                }
                if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
                    alert("ctrl + shift + i has been disabled");
                    return false;
                }
                if(e.ctrlKey && e.shiftKey && e.keyCode == 74){
                    alert("ctrl + shift + j has been disabled");
                    return false;
                }
                if(e.keyCode == 123){ //F12 Button
                    alert("F12 has been disable");
                    return false;
                }
            }
        })
    </script>
</body>