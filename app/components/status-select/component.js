import Select from 'ember-cli-materialize/components/md-select';

export default Select.extend({
  content: [
    { status: 'Application', num: '1'},
    { status: 'Interview', num: '2'},
    { status: 'Negotiation', num: '3'},
    { status: 'Accepted', num: '4'},
    { status: 'Rejected', num: '5'},
  ],

  optionLabelPath: "content.status",

  optionValuePath: "content.status"
});
