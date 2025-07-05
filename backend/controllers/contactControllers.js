const Contact = require('../models/Contact');

//crud - create,read,update,delete.

exports.create = async(req,res) => {
    const contact = new Contact(req.body);
    //To save contact details in db
    await contact.save();
    //returns saved contact in the response
    res.json(contact);
};
exports.getAll =async(req,res)=>{
    //Contacts.find() to fetch all contacts from MongoDb
    const contacts = await Contact.find();
    //sends the list as a json response
    res.json(contacts);

}
exports.update=async(req,res) => {
    //finds contact by id(req.params.id
    //and update it with req.body)
    const update = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    //sends the update contact back in the response
    res.json(update);

}

exports.remove = async(req,res) => {
await Contact.findByIdAndDelete(req.params.id);
res.json({success:true});
}

//get post,put,delete-http vverb
