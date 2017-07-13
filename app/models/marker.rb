class Marker < ApplicationRecord
    belongs_to :hike, optional: true
    has_many :photos
    has_many :tips
end
