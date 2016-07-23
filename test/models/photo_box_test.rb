# == Schema Information
#
# Table name: photo_boxes
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  photo_url   :string           not null
#  ord         :integer          not null
#  author_id   :integer          not null
#  board_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PhotoBoxTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
