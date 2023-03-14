const User = require("../../models/user.models");
const Provider = require("../../models/provider.model");
const moment = require("moment");

exports.getSignupsForToday = async (req, res) => {
  try {
    const startDate = moment().startOf("day");
    const endDate = moment().endOf("day");
    const numSignups = await User.countDocuments({
      createdAt: { $gte: startDate, $lt: endDate },
    });
    res.json({ message:`total sign up for today is: ${numSignups}`, numSignups:numSignups});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching signups" });
  }
};

exports.getProviderSignupsForToday = async (req, res) => {
  try {
    const startDate = moment().startOf("day");
    const endDate = moment().endOf("day");
    const numSignups = await Provider.countDocuments({
      createdAt: { $gte: startDate, $lt: endDate },
    });
    res.json({ message:`total sign up for today is: ${numSignups}`, numSignups:numSignups});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching signups"});
  }
};