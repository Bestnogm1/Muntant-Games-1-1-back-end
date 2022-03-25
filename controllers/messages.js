import { Message } from "../models/message.js";
import { Lobby } from "../models/lobby.js"

function index(req, res) {
	// lobby = req.location or something
	// Message.find({ lobby: req.location })
	Message.find({})
		.then(messages => res.json(messages))
		.catch(err => {
			console.err(err);
			res.status(500).json(err);
		});
}

function create(req, res) {
	// req.body.owner = req.user.profile
	// let lobby = req.location.
	Message.create(req.body)
		.then(message => res.json(message))
		.catch(err => {
			console.error(err);
			res.status(500).json(err);
		});
}

export { index, create };
