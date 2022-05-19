var user = [{
    name: 'Panda Vasya', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG',
    description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'
},
{
    name: 'Panda Petya',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDNXWGJhnfwePo5gFTjUufzZSgpK7T-J_YYVMuxVLsadPEqdmTg5bzOcbmfBtQABIerk&usqp=CAU',
    description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода'
},
{
    name: 'Panda Fedya',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmXWFBruLkbyKjUlDiYA_YaHul86nYFRk9Q7OIjXlsEyvj4W7DCP1IvaI5ULqU2EvnR4&usqp=CAU',
    description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль'
}]
for (let i = 0; i < user.length; i++) {
    var div = document.createElement("div"),
        p = document.createElement("p"),
        img = document.createElement("img"),
        p2 = document.createElement("p")
    document.body.appendChild(div)
    div.appendChild(p)
    div.appendChild(img)
    div.appendChild(p2)
    p.innerHTML = user[i].name
    img.src = user[i].url
    p2.innerHTML = user[i].description
}