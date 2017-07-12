class Hike < ApplicationRecord
    belongs_to :user, optional: true
    has_many :completions
    has_many :waypoints
    has_many :comments

end
