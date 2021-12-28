   // Array practice

   const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() checks if atleast one thing in your array meets what you're looking for
   // is at least one person 19 or older?
   const isAdult=people.some(function(person, name){
       const currentYear=(new Date()).getFullYear();
    if (currentYear-person.year >=19){
      return true;

    }
   });
   

   const isAdultTwo=people.some(person =>{
    const currentYear=(new Date()).getFullYear(); 
    return currentYear -person.year >= 19;
   })
   console.log(isAdult);
   console.log(isAdultTwo);
  // Array.prototype.every() // is everyone 19 or older?
  const allAdults=people.every(person =>{
    const currentYear=(new Date()).getFullYear(); 
    return currentYear -person.year >= 19;
   })
   console.log(allAdults);
   //reads as false because not all adults are 19

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const findId= comments.find(function(comment){
     if(comment.id===823423){
       return true;
     }
  })
  console.log(findId);

  const comment=comments.find(comment =>{
return comment.id=== 823423;
  });
  console.log(comment);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const index= comments.findIndex(comment=>{
    return comment.id=823423
  })
  console.log(index);
  comments.splice(index,1);
  console.table(comments);

  //redux
  const newComments=[
    ...comments.slice(0, index), //...spread
    ...comments.slice(index+1)
  ];
  console.table(newComments)