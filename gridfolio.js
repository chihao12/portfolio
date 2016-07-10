                                    /*
Sample Structure:

gf_content =  [
                [ row 1
                  { block 1 },
                  { block 2 },
                  { block 3 }
                ],
                etc.
              ]

Rows can have 1 - 9 blocks.
                                    */

var socialMediaIconStyle = {
  backgroundColor: '#81d4fa',
  fontSize: "20px",
  color: "#fff"
}

var gf_content = [
  [ // Row 1
    {
      title: "Marcus Koh",
      link: "https://www.instagram.com/cheezyhao95/",
      keywords: ["developer", "soldier","single"],
      style: {
        backgroundColor: "#0097a7",
        fontSize: "26px",
        color: "#fff"
      }
    },
    {
      title: "SG Checkpoint",
      link: "https://play.google.com/store/apps/details?id=chihao.singaporetrafficimages",
      imageURL: "./assets/sgcheckpoint.jpg",
      keywords: ["android", "laravel", "php"]
    },
    {
      title: "FireNotes",
      link: "https://play.google.com/store/apps/details?id=chihao.firenotes",
      imageURL: "./assets/firenotes.jpg",
      keywords: ["android", "firebase"]
    },
    {
      title: "@_ApolloBot",
      link: "https://twitter.com/_ApolloBot",
      imageURL: "./assets/apollo17.jpg",
      keywords: ["python", "twitter", "bot"]
    }
  ],
  [
    {
      title: "Find my portfolio here! ",
      link: "https://seelio.com/kohchihao",
      customHeight: true,
      style: {
        backgroundColor: '#607d8b',
        height: '100px'
      }
    },
  ],
  [ // Row 2
    {
      title: "Shiftime Employer",
      link: "https://seelio.com/w/1ku2/shiftime-employer?student=kohchihao",
      imageURL: "./assets/shiftime.jpg",
      keywords: ["android", "laravel"]
    },
    {
      title: "Singapore PSI",
      link: "https://play.google.com/store/apps/details?id=chihao.sgpsi",
      imageURL: "./assets/sgpsi.jpg",
      keywords: ["android", "NEA"]
    },
    {
      title: "KeyboardLah",
      link: "https://play.google.com/store/apps/details?id=chihao.mykeyboard",
      imageURL: "./assets/keyboard.jpg",
      keywords: ["android"]
    },
    {
      title: "Cherie Hearts @ Depot",
      link: "https://seelio.com/w/1f17/redesigning-cherie-hearts-deport-android-app?student=kohchihao",
      imageURL: "./assets/cherieheart.jpg",
      keywords: ["android"]
    }
  ],
  /*[ // row
    {
      title: "<i class='fa fa-linkedin'></i>",
      link: "https://www.linkedin.com/in/christinechanyc",
      style: socialMediaIconStyle
    },
    {
      title: "<img class='fa' src='./assets/recurse_logo.png' height='35'/>",
      link: "https://recurse.com",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-twitter'></i>",
      link: "https://twitter.com/christinechanyc",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-github'></i>",
      link: "https://github.com/christinecha",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-envelope'></i>",
      link: "mailto:hello@christinecha.com",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-instagram'></i>",
      link: "https://instagram.com/christinechanyc",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-apple'></i>",
      link: "https://itunes.apple.com/us/app/circlematch-minimalistic-sliding/id1082737491?ls=1&mt=8",
      style: socialMediaIconStyle
    },
    {
      title: "<i class='fa fa-angellist'></i>",
      link: "https://angel.co/christinechanyc",
      style: socialMediaIconStyle
    },
  ]*/
]


var gf_styles = {
  squareMode: true,
  innerBlock: {
    fontFamily: "Montserrat",
    color: "rgba(15,15,15,0.6)",
    padding: "15px"

  },
  blockTitle: {
    color: "#fff",
    margin: "0 auto",
    textTransform: "uppercase",
    // textShadow: "0 0 2px rgba(0,0,0,0.8)"
  },
  keyword: {
    fontSize: "9px",
    backgroundColor: "rgba(255,255,255,0.8)",
    textTransform: "uppercase",
    color: "#666",
    padding: "2px 5px",
    margin: "2px"
  },
  keywords: {
    fontSize: "10px",
    marginTop: "-40px"
  }
}
