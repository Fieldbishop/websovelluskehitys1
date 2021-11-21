let notes = (function() {
    let list = [];

    return {
        add: function(note) {
            if (note && note.trim().length !== 0) {
                let item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {
            if(index){
                let temp = [];
                if(list.length>index){
                    for (let i = 0; i < list.length; i++) {
                        if(index !== i){
                            temp.push(list[i]);
                        }
                    }
                    list = temp;
                    return true;
                }
            }
            return false;
        },
        count: function() {
            return list.length;
        },
        list: function() {
            let returnValue = '';
            for (let i = 0; i < list.length; i++) {
                 returnValue += list[i].text + "\n";
            }
            return returnValue;
        },
        findThis: function(str) {
            if(str && str.trim().length !== 0){
                for (let i = 0; i < list.length; i++) {
                    if(list[i].text.localeCompare(str) === 0){
                        return true;
                    }
                }
            }
            return false;
        },
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());