class Waypoint < ApplicationRecord
    belongs_to :hike, optional: true
    has_many :tips
    has_many :photos
end
