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

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
