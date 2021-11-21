describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    describe('adding a note', function() {
        it("should be able to add a new note", function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });
        it("should ignore blank notes", function () {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should ignore notes containing only whitespace', function () {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(5);
        });

        it('should require a string parameter', function () {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });
    describe('deleting a note', function() {
        it('should be able to delete the first index', function(){
            expect(notes.remove(2)).toBe(true);
            expect(notes.count()).toBe(4);
        });
        it('should be able to delete the last index', function (){
            expect(notes.remove(4)).toBe(true);
            expect(notes.count()).toBe(4);
        });
        it('should return false if index is out of range', function(){
            expect(notes.remove(5)).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should return false if the parameter is missing', function (){
            expect(notes.remove()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });
    describe('finding a note', function() {
        it('should return true upon finding note', function (){
            expect(notes.findThis('third note')).toBe(true);
        });
        it('should return false upon not finding note', function (){
            expect(notes.findThis('asd')).toBe(false);
        })
        it('should return false upon giving a blank string to function', function (){
            expect(notes.findThis('     ')).toBe(false);
        });
        it('should return false upon not giving a string to function', function (){
            expect(notes.findThis()).toBe(false);
        });
    });
    describe('printing the list', function() {
       it('Should return the whole list',function (){
           expect(notes.list()).toBe('first note\nsecond note\nthird note\nfourth note\nfifth note\n');
       });
       it('Should return the list without a removed element',function (){
           expect(notes.remove(1)).toBe(true);
           expect(notes.list()).toBe('first note\nthird note\nfourth note\nfifth note\n');
       });
    });
});
