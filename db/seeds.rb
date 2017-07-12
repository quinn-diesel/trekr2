# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "DB Seeding..."

###### USERS ######
User.destroy_all

u1 = User.create firstname: "Quinn", surname: "Diesel", email: "quinn@gmail.com", password: "chicken"
u2 = User.create firstname: "Jerry", surname: "Stack", email: "jerry@day.com", password: "chicken"
u3 = User.create firstname: "Bill", surname: "Murray", email: "bill@murray.com", password: "chicken"
u4 = User.create firstname: "Tanner", surname: "Hall", email: "thall@day.com", password: "chicken"



###### HIKES ######

Hike.destroy_all

### SPIT TO MANLY ###
h1 = Hike.create name: "Spit to Manly", description: "Amazing scenic views of Sydney Harbor with plenty of stop off points and lookouts. Highly recommend for all, and a must for anybody visiting Sydney for the first time!"

### NORTH HEAD CLIFFS ###
h2 = Hike.create name: "Northhead Cliffs", description: "Scenic track and a walk back into Australia's rich aboriginal and colonial history. Along the way you will see WWII gun emplacements, Quarantine Station & Cemetery, and finally a nature/info center where you can educate yourself on the original aboriginal inhabitants of the land and their culture."

### TARONGA ZOO ###
h3 = Hike.create name: "Taronga Zoo to Balmoral", description: "Easy going track with similar views to Spit-to-Manly, but shorter with easier grades and pathes. Starts near the Taronga Zoo, so easy access via ferry or bus & you can always make it a day with a stop off at the zoo to see the animals. Great quick walk to enjoy a view."



###### TIPS ######

Tip.destroy_all

### SPIT TO MANLY ###
t1 = Tip.create tip: "Great to do with a class of people. Especially a class of web development students. Preferably with drinks at the end"
### NORTH HEAD CLIFFS ###
t2 = Tip.create tip: "Steep outset if you start from Shelly Beach, but great views from the Rocks/Shelly Lookout just above the Shelly Beach Parking lot."
### TARONGA ZOO ###
t3 = Tip.create tip: "Ferry should be just down to the right of the trailhead."

###### COMPLETIONS ######

Completion.destroy_all

c1 = Completion.create date: "2017-04-02"
c2 = Completion.create date: "2017-01-01"
c3 = Completion.create date: "2017-03-02"
c4 = Completion.create date: "2017-02-06"
c5 = Completion.create date: "2017-03-04"
c6 = Completion.create date: "2017-05-04"
c7 = Completion.create date: "2017-05-06"


###### WAYPOINTS ######

Waypoint.destroy_all

### SPIT TO MANLY ####
w1 = Waypoint.create lat: "-33.804122", long: "151.246096"
w2 = Waypoint.create lat: "-33.806985", long: "151.251374"
w3 = Waypoint.create lat: "-33.798827", long: "151.282705"
### NORTH HEAD CLIFFS ####
w4 = Waypoint.create lat: "-33.812192", long: "151.289673"
w5 = Waypoint.create lat: "-33.823486", long: "151.299254"
w6 = Waypoint.create lat: "-33.807094", long: "151.307283"
### TARONGA ZOO ####
w7 = Waypoint.create lat: "-33.839608", long: "151.237016"
w8 = Waypoint.create lat: "-33.853335", long: "151.245853"
w9 = Waypoint.create lat: "-33.842830", long: "151.246192"


###### PHOTOS ######

Photo.destroy_all

p1 = Photo.create image_url: "https://www.sydneycoastwalks.com.au/wp-content/uploads/2015/07/Header-Spit-to-Manly-walk.jpg"
p2 = Photo.create image_url: "http://www.nationalparks.nsw.gov.au/~/media/6B52FC6728594360B5BDBA71EE032A74.ashx"
p3 = Photo.create image_url: "http://cdn.natgeotv.com.au/factsheets/thumbnails/TarongeCentenaryHeader.jpg?v=27&azure=false&scale=both&width=1024&height=560&mode=crop"



#### WAYPOINT ####

Waypoint.destroy_all


### SPIT TO MANLY ####
w1 = Waypoint.create lat: "-33.804122", long: "151.246096"
w2 = Waypoint.create lat: "-33.806985", long: "151.251374"
w3 = Waypoint.create lat: "-33.798827", long: "151.282705"
### NORTH HEAD CLIFFS ####
w4 = Waypoint.create lat: "-33.812192", long: "151.289673"
w5 = Waypoint.create lat: "-33.823486", long: "151.299254"
w6 = Waypoint.create lat: "-33.807094", long: "151.307283"
### TARONGA ZOO ####
w7 = Waypoint.create lat: "-33.839608", long: "151.237016"
w8 = Waypoint.create lat: "-33.853335", long: "151.245853"
w9 = Waypoint.create lat: "-33.842830", long: "151.246192"


#### COMMENTS ####

Comment.destroy_all

### SPIT TO MANLY ####
com1 = Comment.create comment: "WOOOOOOOW. This is an epic walk. I especially loved the dog dressed in human clothing."

### NORTH HEAD CLIFFS ####
com2 = Comment.create comment: "This walk is the reason why I love manly."

### TARONGA ZOO ####
com3 = Comment.create comment: "Taronga Zoo is the best zoo in Australia. I recommend it to any visitor coming to Sydney. Easily one of the best spots."


##### RELATIONSHIP SEEDS #####

### User to Hikes ###
u1.hikes << h1
u2.hikes << h2
u3.hikes << h3

### User to Completions ###
u1.completions << c1 << c2 << c3
u2.completions << c4 << c5 << c6
u3.completions << c7

### Hike to Completions ###
h1.completions << c1 << c4
h2.completions << c2 << c5 << c7
h3.completions << c3 << c6

### Hike to Waypoints ###
h1.waypoints << w1 << w2 << w3
h2.waypoints << w4 << w5 << w6
h3.waypoints << w7 << w8 << w9

### Hike to Comments ###
h1.comments << com1
h2.comments << com2
h3.comments << com3

### User to Comments ###
u1.comments << com1
u2.comments << com2
u3.comments << com3

### Waypoint to Tips ###
w1.tips << t1
w4.tips << t2
w7.tips << t3

### Waypoint to Photos ###
w2.photos << p1
w5.photos << p2
w7.photos << p3
