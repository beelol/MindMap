# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  name        :string
#  description :string
#  author_id   :integer          not null
#  ord         :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Listing < ActiveRecord::Base
end
