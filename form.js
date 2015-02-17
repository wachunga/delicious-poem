var gorgeous = {
	glutinous: { 
		get guimave() { return secret('Rmx1ZmZlcg=='); }
	}
};

var abundant = {
	aromatic: { 
		get arachide() { return secret('bnV0dGVy'); }
	}
};

function secret(line) {
	return new Buffer(line, 'base64').toString('binary');
}

global.gorgeous = gorgeous;
global.abundant = abundant;