import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {firstName: 'Corbin', lastName: 'Otwell', fullName: 'Corbin Otwell', email: 'cbotwell@gmail.com', password: '**********', profilePicture: 'https://pbs.twimg.com/profile_images/502306732711112704/6WGVEDob_400x400.jpeg', resume: 'http://corbinotwell.com/resume', coverLetter: 'https://www.dropbox.com/s/c6685i8axoqju30/Cover%20Letter%205-2-14.docx?dl=0'};
  }
});
