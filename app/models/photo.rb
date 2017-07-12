class Photo < ApplicationRecord
    belongs_to :waypoint, optional: true
end
