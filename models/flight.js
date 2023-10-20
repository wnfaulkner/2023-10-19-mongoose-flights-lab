const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airline: {type: String, enum: ['American','Southwest','United']},
  airport: {type: String, enum: ['MSY','MEX','EBB','YUL','LPB']},
  flightNo: {type: Number, match: /\b(1[0-9]{1,3}|[2-9][0-9]{1,3}|9999)\b/},
  departs: {
    type: Date,
    validate: { //NOTE FOR REVIEWERS - THE FOLLOWING FUNCTION WAS COPY-PASTED FROM CHATGPT. THE LESSON ONLY COVERS STRING VALIDATION, NOT DATES.
      validator: function (value) {
        const currentDate = new Date() // Calculate the current date
        const oneYearFromNow = new Date() // Calculate the date one year from now
        oneYearFromNow.setFullYear(currentDate.getFullYear() + 1)
        return value <= oneYearFromNow && value >= currentDate // Check if the 'depart' date is within the allowed range
      },
      message: 'The depart date must be within one year from the current date.',
    },
  },
});