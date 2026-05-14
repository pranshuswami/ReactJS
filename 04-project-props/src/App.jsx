import Card from "./components/card"

const App = () => {

 const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/736x/e0/6c/06/e06c061bc3c7558aefe2fbe49e2ca4c3.jpg",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
    companyName: "Amazon",
    datePosted: "10 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/37/55/df/3755df15d92e7c4f68294fcb54b25599.jpg",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Java Developer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/736x/2c/ea/3e/2cea3e7494f8f6f763216b708c21f4f2.jpg",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/70/80/b2/7080b24c3980c8f4d29412746b5c7ce9.jpg",
    companyName: "Airbnb",
    datePosted: "12 days ago",
    post: "Node.js Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/df/00/b1/df00b1d8590dba5b570420e96809b5c6.jpg",
    companyName: "Tesla",
    datePosted: "9 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mumbai, India",
  },
];
 console.log(jobOpenings);
 
  return (
    <div className="parent">
     {jobOpenings.map(function(elem,idx){
    
      return <div key={idx}>
        <Card  logo={elem.brandLogo} datePosted={elem.datePosted} company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      </div>
      })}
   
     </div>
  )
}

export default App
