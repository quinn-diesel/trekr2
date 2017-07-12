class User < ApplicationRecord

    has_many :hikes
    has_many :completions
    has_many :completed_hikes, :through => :completions, :source => :hike
    has_many :comments

    has_secure_password
    validates :email, presence: true, uniqueness: true, length: {minimum: 5}

end
