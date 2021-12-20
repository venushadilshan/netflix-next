import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([
  
   
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/7ajHGIAYNMiIzejy1LJWdPrcAx8.jpg",
            "genre_ids": [
                28,
                35,
                80,
                53
            ],
            "id": 512195,
            "original_language": "en",
            "original_title": "Red Notice",
            "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
            "popularity": 4024.798,
            "poster_path": "https://image.tmdb.org/t/p/original/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
            "release_date": "2021-11-04",
            "title": "Red Notice",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 2122
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/aBoHKFFue7TcjRIvoSdvFaS4Kie.jpg",
            "genre_ids": [
                80,
                18
            ],
            "id": 716810,
            "original_language": "fi",
            "original_title": "Sorjonen: Muraalimurhat",
            "overview": "A mural painted with blood is found on the wall of Pasila train station, which depicts Finland's best-known serial killer Lasse Maasalo. The text in the mural, “Making the world a better place”, is linked to a voting circulating in social media, where people can vote for persons that world would be a better place without. Soon the first body is found and Sorjonen must find the person who has named himself as The Judge.",
            "popularity": 1143.114,
            "poster_path": "https://image.tmdb.org/t/p/original/jtmfXeeECuYNuKSFUlR61ka94QR.jpg",
            "release_date": "2021-10-27",
            "title": "Bordertown: The Mural Murders",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 30
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/kJ2srEZSlmGfAqLKGVMPhBDdr1G.jpg",
            "genre_ids": [
                10770,
                53,
                80
            ],
            "id": 831223,
            "original_language": "en",
            "original_title": "Gone Mom: The Disappearance of Jennifer Dulos",
            "overview": "Jennifer Dulos, the wealthy, Connecticut mother-of-five who mysteriously vanished.",
            "popularity": 1457.264,
            "poster_path": "https://image.tmdb.org/t/p/original/mzTNGnLG6LTHmrqrY0IADHDuyOJ.jpg",
            "release_date": "2021-06-05",
            "title": "Gone Mom: The Disappearance of Jennifer Dulos",
            "video": false,
            "vote_average": 4.8,
            "vote_count": 4
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/gg2w8QYf6o5elN95RHtikQaVIsc.jpg",
            "genre_ids": [
                28,
                18,
                80
            ],
            "id": 592508,
            "original_language": "hi",
            "original_title": "Sooryavanshi",
            "overview": "A fearless, faithful albeit slightly forgetful Mumbai cop, Veer Sooryavanshi, the chief of the Anti-Terrorism Squad in India pulls out all the stops and stunts to thwart a major conspiracy to attack his city.",
            "popularity": 1331.932,
            "poster_path": "https://image.tmdb.org/t/p/original/8p3mhjyLjHKtaAv8tFKfvEBtir0.jpg",
            "release_date": "2021-11-05",
            "title": "Sooryavanshi",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 31
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/lNnnhBxQESk0WbUXNeh24Dx8XA7.jpg",
            "genre_ids": [
                53,
                18,
                80
            ],
            "id": 767377,
            "original_language": "hi",
            "original_title": "धमाका",
            "overview": "When a cynical ex-TV news anchor gets an alarming call on his radio show, he sees a chance for a career comeback — but it may cost his conscience.",
            "popularity": 973.636,
            "poster_path": "https://image.tmdb.org/t/p/original/KowKEuyWziUtnCYicv6zhzTQIv.jpg",
            "release_date": "2021-11-19",
            "title": "Dhamaka",
            "video": false,
            "vote_average": 7,
            "vote_count": 37
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/vJ3ED2jPblACDqaJPZlbN6T1yjy.jpg",
            "genre_ids": [
                53,
                80,
                28,
                12
            ],
            "id": 776821,
            "original_language": "es",
            "original_title": "Las leyes de la frontera",
            "overview": "Introverted Girona student Nacho meets two delinquents from the city's Chinatown and gets caught up in a summer onslaught of burglaries and hold ups that will change his life.",
            "popularity": 817.381,
            "poster_path": "https://image.tmdb.org/t/p/original/qrq7sGXraFM6H9OcHFKQTKe8A3f.jpg",
            "release_date": "2021-10-08",
            "title": "Outlaws",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 72
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/gGTCDNEvwG848u34Op1nZNALLUr.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 385128,
            "original_language": "en",
            "original_title": "F9",
            "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
            "popularity": 823.658,
            "poster_path": "https://image.tmdb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
            "release_date": "2021-05-19",
            "title": "F9",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 4579
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/pKgfWzxOpvGV3MQ0kLjLdjKAzUe.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 785538,
            "original_language": "pt",
            "original_title": "7 Prisioneiros",
            "overview": "An impoverished teen seeking to escape the clutches of a human trafficker must weigh living up to his moral code against his struggle to survive.",
            "popularity": 775.093,
            "poster_path": "https://image.tmdb.org/t/p/original/5svMKCGnR6Yvj8wxldvDvgUi0Jk.jpg",
            "release_date": "2021-10-22",
            "title": "7 Prisoners",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 147
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/eBGKU0ZLJmxtVtzESTB1mfllX1J.jpg",
            "genre_ids": [
                80,
                28,
                53
            ],
            "id": 630004,
            "original_language": "en",
            "original_title": "The Vault",
            "overview": "When an engineer learns of a mysterious, impenetrable fortress hidden under The Bank of Spain, he joins a crew of master thieves who plan to steal the legendary lost treasure locked inside while the whole country is distracted by Spain's World Cup Final. With thousands of soccer fans cheering in the streets, and security forces closing in, the crew have just minutes to pull off the score of a lifetime.",
            "popularity": 585.928,
            "poster_path": "https://image.tmdb.org/t/p/original/kWhXubAiIcHW0xn5GThflqaKZqh.jpg",
            "release_date": "2021-03-03",
            "title": "The Vault",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 461
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/kmuSGNlF9mfNHIDOEVEWPj6f3Ak.jpg",
            "genre_ids": [
                35,
                80
            ],
            "id": 337404,
            "original_language": "en",
            "original_title": "Cruella",
            "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
            "popularity": 530.183,
            "poster_path": "https://image.tmdb.org/t/p/original/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
            "release_date": "2021-05-26",
            "title": "Cruella",
            "video": false,
            "vote_average": 8.2,
            "vote_count": 6151
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/mu8RKavbv7Ml48twHQ6XVk7zw8e.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 796499,
            "original_language": "en",
            "original_title": "Army of Thieves",
            "overview": "A mysterious woman recruits bank teller Ludwig Dieter to lead a group of aspiring thieves on a top-secret heist during the early stages of the zombie apocalypse.",
            "popularity": 543.647,
            "poster_path": "https://image.tmdb.org/t/p/original/iPTZGFmPs7HsXHYxiuxGolihjOH.jpg",
            "release_date": "2021-10-27",
            "title": "Army of Thieves",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 909
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/mR4PeGrxdEoAc1i5kN7Q2lOFAA5.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 574060,
            "original_language": "en",
            "original_title": "Gunpowder Milkshake",
            "overview": "In her turbulent life as a professional assassin, Sam has no choice but to go rogue to save the life of an innocent 8-year-old girl in the middle of the gang war she has unleashed.",
            "popularity": 419.193,
            "poster_path": "https://image.tmdb.org/t/p/original/56ofGPMOZCwlTjTao5fB7vnGOoj.jpg",
            "release_date": "2021-07-14",
            "title": "Gunpowder Milkshake",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 426
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 637649,
            "original_language": "en",
            "original_title": "Wrath of Man",
            "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
            "popularity": 449.768,
            "poster_path": "https://image.tmdb.org/t/p/original/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
            "release_date": "2021-04-22",
            "title": "Wrath of Man",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 2805
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/zlpZzccypkAYFZIyYLQcchl90ZC.jpg",
            "genre_ids": [
                878,
                28,
                80,
                10770
            ],
            "id": 225914,
            "original_language": "en",
            "original_title": "The Amazing Spider-Man",
            "overview": "When an extortionist threatens to force a multi-suicide unless a huge ransom is paid, only Peter Parker can stop him with his new powers as Spider-Man.",
            "popularity": 352.257,
            "poster_path": "https://image.tmdb.org/t/p/original/nyXfGIkJQgKhugxMVql15URobtt.jpg",
            "release_date": "1977-09-14",
            "title": "The Amazing Spider-Man",
            "video": false,
            "vote_average": 5.5,
            "vote_count": 68
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/4O40vu2KOgnFfxvrZgzBG6havQ.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 645788,
            "original_language": "en",
            "original_title": "The Protégé",
            "overview": "Rescued as a child by the legendary assassin Moody and trained in the family business, Anna is the world’s most skilled contract killer. When Moody, the man who was like a father to her and taught her everything she needs to know about trust and survival, is brutally killed, Anna vows revenge. As she becomes entangled with an enigmatic killer whose attraction to her goes way beyond cat and mouse, their confrontation turns deadly and the loose ends of a life spent killing will weave themselves ever tighter.",
            "popularity": 347.605,
            "poster_path": "https://image.tmdb.org/t/p/original/o9FY8N5c8CXf22q8s4CmRRjAQJx.jpg",
            "release_date": "2021-08-19",
            "title": "The Protégé",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 388
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/originalnull",
            "genre_ids": [
                28,
                80
            ],
            "id": 385687,
            "original_language": "en",
            "original_title": "Fast & Furious 10",
            "overview": "The tenth installment in the Fast Saga.",
            "popularity": 329.263,
            "poster_path": "https://image.tmdb.org/t/p/original/2DyEk84XnbJEdPlGF43crxfdtHH.jpg",
            "release_date": "2023-05-19",
            "title": "Fast & Furious 10",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/hrzoy8vvUrxQixOM11pwW9AX7Bu.jpg",
            "genre_ids": [
                80,
                18
            ],
            "id": 524369,
            "original_language": "en",
            "original_title": "The Many Saints of Newark",
            "overview": "Young Anthony Soprano is growing up in one of the most tumultuous eras in Newark, N.J., history, becoming a man just as rival gangsters start to rise up and challenge the all-powerful DiMeo crime family. Caught up in the changing times is the uncle he idolizes, Dickie Moltisanti, whose influence over his nephew will help shape the impressionable teenager into the all-powerful mob boss, Tony Soprano.",
            "popularity": 294.579,
            "poster_path": "https://image.tmdb.org/t/p/original/dVoQSUomKuv12BUpuWTjaPThmyO.jpg",
            "release_date": "2021-09-22",
            "title": "The Many Saints of Newark",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 257
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/jdLsmpqmP1wTdFUPtmxMnYgoifT.jpg",
            "genre_ids": [
                18,
                80,
                53
            ],
            "id": 644495,
            "original_language": "en",
            "original_title": "House of Gucci",
            "overview": "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately…murder.",
            "popularity": 284.699,
            "poster_path": "https://image.tmdb.org/t/p/original/cy6fvTf9YqehVhReYnm5cc3GqhZ.jpg",
            "release_date": "2021-11-24",
            "title": "House of Gucci",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 375
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
            "genre_ids": [
                28,
                80,
                18,
                53
            ],
            "id": 539885,
            "original_language": "en",
            "original_title": "Ava",
            "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
            "popularity": 291.108,
            "poster_path": "https://image.tmdb.org/t/p/original/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
            "release_date": "2020-07-02",
            "title": "Ava",
            "video": false,
            "vote_average": 5.7,
            "vote_count": 1828
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/c0izdYdnTe4uMRifHgvTA85wPz0.jpg",
            "genre_ids": [
                28,
                80,
                27,
                53
            ],
            "id": 503736,
            "original_language": "en",
            "original_title": "Army of the Dead",
            "overview": "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.",
            "popularity": 264.686,
            "poster_path": "https://image.tmdb.org/t/p/original/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
            "release_date": "2021-05-14",
            "title": "Army of the Dead",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 2688
        }
    
])
/*   useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
      params: {with_genres: '80', page: '1'},
      headers: {
        'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST,
        'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
      setMovieList(response.data.results);
    }).catch(function (error) {
      console.error(error);
    });


  }, []); */

/*   useEffect(() => {
    console.log(movieList);
  }, [movieList]);
 */


  return (<div className="container -mt-44 ">
    
    <div className="mt-44 h-full bg-cover bg-start bg-repeat opacity-80 absolute w-full "  style={{backgroundImage: "url('https://image.tmdb.org/t/p/original/z8CExJekGrEThbpMXAmCFvvgoJR.jpg')"}}>
      </div>
    
    <div className="flex flex-row " >
      <h1 className="text-slate-50 ml-44 text-2xl font-bold mb-5">{props.sectionName}</h1></div>

    <div className="flex flex-row  justify-center overflow-x-auto  w-screen flex-shrink-0  swipe flex-wrap ">

    
      {movieList.map((item) => (
      <MovieCard movieName={item.title} movieDescription={item.overview} movieVotes={item.vote_count} movieDate={item.release_date} movieCover={item.backdrop_path}/>
      ))}
    
  </div>
  
  </div>);
}

export default MovieList;