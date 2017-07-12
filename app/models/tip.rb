class Tip < ApplicationRecord
    belongs_to :waypoint, optional: true
end
