const { v4: uuidv4 } = require('uuid');

const dummyData = [
  {
    title: "Ride in Comfort, Wherever You Go",
    text: "Book a safe and convenient cab ride with just a few taps. Choose from a variety of car categories to suit your needs and budget.",
    image: "https://images.unsplash.com/photo-1482287068671-7fb7325e1a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image_position: "left",
    text_position: "right",
    status: "active",
    slug: uuidv4(),
    mobile_image: "https://picsum.photos/id/238/400/600",
    video: "https://www.youtube.com/watch?v=Er-YsuYZ3a0",
    createdBy: "System Administrator",
    modifiedBy: "System Administrator"
  },
  {
    title: "Travel Smarter, Save More",
    text: "Enjoy affordable fares and exciting discounts on your cab rides. We offer transparent pricing so you know exactly what you're paying for.",
    image: "https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image_position: "right",
    text_position: "left",
    status: "active",
    slug: uuidv4(),
    mobile_image: "https://picsum.photos/id/240/400/600",
    video: "https://www.youtube.com/watch?v=h_JcE0yHkDo",
    createdBy: "System Administrator",
    modifiedBy: "System Administrator"
  },
  {
    title: "Ride with Peace of Mind",
    text: "Safety is our top priority. All our drivers are verified and undergo background checks. Track your ride in real-time and share your journey details with loved ones.",
    image: "https://plus.unsplash.com/premium_photo-1661510762076-14dea04bdff3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image_position: "left",
    text_position: "right",
    status: "active",
    slug: uuidv4(),
    mobile_image: "https://picsum.photos/id/242/400/600",
    video: "https://www.youtube.com/watch?v=5vIAWGHCtHw",
    createdBy: "System Administrator",
    modifiedBy: "System Administrator"
  }
]

module.exports = dummyData;