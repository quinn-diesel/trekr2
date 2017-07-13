class Tip < ApplicationRecord
    belongs_to :marker, optional: true
end
