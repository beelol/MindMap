# == Schema Information
#
# Table name: text_boxes
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  text       :string           not null
#  ord        :integer          not null
#  author_id  :integer          not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TextBoxTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
