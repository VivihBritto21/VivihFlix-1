var listaSeries = ["https://media.fstatic.com/q8OMX19mtHfVOClJmU-TV0U5N5Y=/322x478/smart/filters:format(webp)/media/movies/covers/2022/07/FVyWkmGVIAEdZSd.jpg", "https://media.fstatic.com/wN-lKCOYzJlqxb7byhVpxdkwE98=/322x478/smart/filters:format(webp)/media/movies/covers/2020/08/EgMBXllWAAAySYA.jpg","https://www.cinefacts.it/foto/h!American-Horror-Story_Locandina_Poster_Cinefacts.jpg","https://br.web.img3.acsta.net/pictures/14/04/15/19/34/437035.jpg","https://upload.wikimedia.org/wikipedia/pt/2/29/Stranger_Things_Temporada_1_Poster.jpg", ];

//desafio 2 - adicionar itens na lista usando o .push

listaSeries.push("https://media.fstatic.com/qCF06v4nx26WyAmsapypFfFToJM=/322x478/smart/filters:format(webp)/media/movies/covers/2018/11/mQQGdDgn4WpUL9PXssHecWkjfi1.jpg", "https://br.web.img3.acsta.net/pictures/19/09/09/15/42/0355057.jpg", "https://cinema10.com.br/upload/series/series_1652_MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_SY1000_CR0,0,675,1000_AL_.jpg", "https://mundohype.com.br/wp-content/uploads/2021/10/Missa-da-Meia-Noite-s1.jpg", "https://media.fstatic.com/67v5gzslHhcrbFu56h-NvL2dKSg=/322x478/smart/filters:format(webp)/media/movies/covers/2019/07/adc_por_funeste_xe8cdPW.jpg", "https://br.web.img3.acsta.net/pictures/18/09/18/01/28/2276088.jpg");

var nomeSeries = ["American Horror Stories", "A Maldição Da Mansão Bly", "American Horror Story", "Carnivàle", "Stranger Things", "Maldição Da Residência Hill","Marianne" , "Ghoul", "Missa Da Meia Noite", "Haunted", "Hannibal"];

document.write('<div class="container_todosSeries">')
//desafio 1 - transformar for em while
var i = 0;
while(i < listaSeries.length){
    if((listaSeries[i].endsWith('jpg')) || (listaSeries[i].endsWith('jpeg'))){
        document.write('<div class="container_series">')
        document.write('<img src='+ listaSeries[i] +'>');
        document.write('<p>'+ nomeSeries[i] +'</p>'); //desafio 4 - colocar titulos embaixo da imagem
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')
