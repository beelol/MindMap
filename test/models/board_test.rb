# == Schema Information
#
# Table name: boards
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  description     :string
#  listing_id      :integer          not null
#  author_id       :integer          not null
#  master_board_id :integer
#  ord             :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
