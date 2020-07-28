window.onload = function () {
    var ADMIN = 0;
    var READ_ONLY = 1;
    var AUTHOR = 2;
    var Role;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
        Role[Role["AUTHOR"] = 2] = "AUTHOR";
    })(Role || (Role = {}));
    ;
    var person = {
        name: 'Lawrence',
        age: 30,
        hobbies: ['Sport', 'Cooking'],
        role: Role.ADMIN
    };
    if (person.role === Role.ADMIN) {
        console.log('is admin');
    }
};
