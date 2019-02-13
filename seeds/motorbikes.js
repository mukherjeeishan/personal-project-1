
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('motorbikes').del()
    .then(function () {
      // Inserts seed entries
      return knex('motorbikes').insert([
        {id: 1, brandName: 'Kawasaki', Model: 'Ninja 1000', year: '2015', vehicleImage: '/ninja1000.jpg'},
        {id: 2, brandName: 'Ducati', Model: 'Panigale', year: '2012', vehicleImage: '/panigale.jpg'},
        {id: 3, brandName: 'Honda', Model: 'CBR600', year: '2008', vehicleImage: '/cbr600.jpg'},
        {id: 4, brandName: 'Yamaha', Model: 'MT07', year: '2016', vehicleImage: '/mt07.jpg'},
        {id: 5, brandName: 'Kawasaki', Model: 'Ninja H2', year: '2018', vehicleImage: '/ninjah2.jpg'}
      ]);
    });
};
