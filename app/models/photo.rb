class Photo < ApplicationRecord
    belongs_to :marker, optional: true
end
