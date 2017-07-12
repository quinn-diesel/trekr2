class Completion < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :hike, optional: true
end
