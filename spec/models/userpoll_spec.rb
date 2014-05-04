require 'spec_helper'

describe Userpoll do
  it "has a valid factory" do
    expect(build(:userpoll)).to be_valid
  end
end
