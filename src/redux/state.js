
  let state = {

      profilePage:{
        posts : [
          {id : 1, message : 'Hi, how are you?', likeCounter : 20},
          {id : 2, message : 'Lol, its work!', likeCounter : 2},
          {id : 3, message : 'Lalalalalla omg ', likeCounter : 77},
          {id : 4, message : 'Corona virus !!!11', likeCounter : 15},
        
        ],

        profile:[

          {id : 1, name : 'Jon',   secondName : 'Petrov'},
          {id : 2, name : 'Piter', secondName : 'Ivanov'},
          {id : 3, name : 'James', secondName : 'Sidorov'},
          {id : 4, name : 'Segey', secondName : 'Bond'},
          {id : 5, name : 'Irina', secondName : 'Kotova'},
          {id : 6, name : 'Rob',   secondName : 'Rashid'},

        ]


      },


     dialogPage : {

          dialogs :  [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Ivan' },
            { id: 4, name: 'Petya' },
            { id: 5, name: 'Ira' }
          ],
          messages : [
            { id: 1, message: 'Helloo bro ' },
            { id: 2, message: 'Yoooooouuu' },
            { id: 3, message: 'WEgteeeeee' },
            { id: 4, message: 'hohYoooooouuu' },
            { id: 5, message: 'YoooooouuuYoooooouuuYoooooouuuYoooooouuu' }
          ]
         }
  }
  export default state;