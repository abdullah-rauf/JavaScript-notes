// try catch is the most common error handling mechnaism.jb koi error a jye and usa handle krna hu or apni psnd ka kuch likhwna hu ta ka user error sa mt dary isa hm error handlings kehty hain.

// error handling ka mtlb hai program mei jab bi koi galti hu jye to usa achy sa handle krna 


try {
    let result = 10 / 0; // Error wala code
    console.log(result);
  } catch (error) {
    console.log('Error:', error.message); // Error handle karna
  }