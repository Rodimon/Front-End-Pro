var hash = "",
    triangle = ""
function a1() {
    for (var i = 0; i < 7; i++) {
        hash += "#"
        triangle += hash + "\n"
    }
    console.log(triangle)
}
function a2() {
    console.log("############################\n" +
        "#####                 ######\n" +
        "##   ***                **##\n" +
        "#   *##**         **  O  *##\n" +
        "#    ***     O    ##**    *#\n" +
        "#       O         ##***    #\n" +
        "#   O       #*             #\n" +
        "#*          #**       O    #\n" +
        "#***        ##**    O    **#\n" +
        "##****     ###***       *###\n" +
        "############################\n")
}
a1()
a2()