# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.new
admin.email = 'a@a.com'
admin.password = 'a'
admin.password_confirmation = 'a'
admin.admin = true
admin.save

user = User.new
user.email = 'b@b.com'
user.password = 'b'
user.password_confirmation = 'b'
user.save

sticky_note = StickyNote.new
sticky_note.jobListing_url = 'generalasemb.ly'
sticky_note.company = 'GA'
sticky_note.title = 'Student'
sticky_note.location = 'NYC'
sticky_note.notes = 'WDI Lambda'
sticky_note.app_status = 'Accepted'
sticky_note.user_id = 1
sticky_note.save

sticky_note = StickyNote.new
sticky_note.jobListing_url = 'generalasemb.ly'
sticky_note.company = 'GA'
sticky_note.title = 'Student'
sticky_note.location = 'Boston'
sticky_note.notes = 'WDI'
sticky_note.app_status = 'Rejected'
sticky_note.user_id = 2
sticky_note.save

sticky_note = StickyNote.new
sticky_note.jobListing_url = 'generalasemb.ly'
sticky_note.company = 'GA'
sticky_note.title = 'Student'
sticky_note.location = 'SF'
sticky_note.notes = 'WDI'
sticky_note.app_status = 'Accepted'
sticky_note.user_id = 2
sticky_note.save