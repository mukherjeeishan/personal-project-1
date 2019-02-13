
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {id: 1, brandName: 'Subaru', Model: 'WRX STI', year: '2007', vehicleImage: '/wrxsti.jpg'},
        {id: 2, brandName: 'Toyota', Model: 'Supra', year: '1998', vehicleImage: '/supra.jpg'},
        {id: 3, brandName: 'Nissan', Model: 'Skyline', year: '2000', vehicleImage: '/skyline.jpg'},
        {id: 4, brandName: 'Mitsubishi', Model: 'Evo VII', year: '2005', vehicleImage: '/evo.jpg'},
        {id: 5, brandName: 'BMW', Model: 'M3', year: '2012', vehicleImage: '/m3.jpg'} 

      ]);
    });
  };
 