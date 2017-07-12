class Comment < ApplicationRecord
    belongs_to :hike, optional: true
    belongs_to :user, optional: true
end
