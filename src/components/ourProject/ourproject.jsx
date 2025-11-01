import React from 'react';

const OurProject = () => {
  const projects = [
    // 1fl-img (G+0)
    { img: '1fl-img1.png', name: "Mr Sunil Katta's Residence", location: 'Hyderabad', floor: 'G+0', direction: 'West'},
   
    // 2fl-img (G+1)
    { img: '2fl-img1.png', name: "Amit Patel's Residence", location: 'Hyderabad', floor: 'G+1', direction: 'North'},
    { img: '2fl-img2.png', name: "Priya Singh's Residence", location: 'Hyderabad', floor: 'G+1', direction: 'West'},
    { img: '2fl-img3.png', name: "Vikram Reddy's Residence", location: 'Hyderabad', floor: 'G+1', direction: 'South'},
    { img: '2fl-img4.png', name: "Sneha Gupta's Residence", location: 'Hyderabad', floor: 'G+1', direction: 'East'},
    { img: '2fl-img5.png', name: "Rohit Kumar's Residence", location: 'Hyderabad', floor: 'G+1', direction: 'North'},
    { img: '2fl-img6.png', name: "Anita Das's Residence", location: 'Hyderabad', floor: 'G+1', direction: 'West'},
    
    // 3fl-img (G+2)
    { img: '3fl-img1.png', name: "Lakshmi Nair's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'West'},
    { img: '3fl-img2.png', name: "Gautam Bose's Residence", location: 'Hyderabad', floor: 'G+2',direction: 'South'},
    { img: '3fl-img3.png', name: "Shilpa Roy's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'East'},
    { img: '3fl-img4.png', name: "Arjun Thakur's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'North'},
    { img: '3fl-img5.png', name: "Divya Malhotra's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'West'},
    { img: '3fl-img6.png', name: "Kiran Aggarwal's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'South'},
    { img: '3fl-img7.png', name: "Pooja Bhat's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'East'},
    { img: '3fl-img8.png', name: "Ravi Shankar's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'North'},
    { img: '3fl-img9.png', name: "Gautam Bose's Residence", location: 'Hyderabad', floor: 'G+2',direction: 'South'},
    { img: '3fl-img10.png', name: "Shilpa Roy's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'East'},
    { img: '3fl-img11.png', name: "Arjun Thakur's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'North'},
    { img: '3fl-img12.png', name: "Divya Malhotra's Residence", location: 'Hyderabad', floor: 'G+2', direction: 'West'},
  ];

  return (
    <div className="OurProject">
      <main className="pt-8 lg:pt-15">
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 text-center mb-8">
              Project gallery
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full md:w-[90%] lg:w-[75%] justify-center mx-auto">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`/projectGallery/${project.img}`} alt={project.name} className="w-full h-55 " />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>📍 {project.location}</span>
                      <span>🏠 {project.floor}</span>
                      <span>🧭 {project.direction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurProject;