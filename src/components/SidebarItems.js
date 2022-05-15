
export const SidebarItems = [
    {
        title: "Main",
        items: [{
          icon: require('../assets/icons/overview-icon.png'),
          name: "Overview",
          route: "overview"
        },]
    },
    {
        title: "Payments",
        items: [
            {
          icon: require('../assets/icons/all-payments.png'),
          name: "All Payments",
          route: "dummy/all_payments"
        },
            {
          icon: require('../assets/icons/reconciled-payments.png'),
          name: "Reconciled Payments",
          route: "dummy/reconciled_payments"
        },
            {
          icon: require('../assets/icons/unreconciled-payments.png'),
          name: "Unreconciled Payments",
          route: "dummy/unreconciled_payments"
        },
            {
          icon: require('../assets/icons/manual-settlement.png'),
          name: "Manual Settlement",
          route: "dummy/manual_settlements"
        },
        ]
    },
    {
        title: "Orders",
        items: [
            {
          icon: require('../assets/icons/all-orders.png'),
          name: "All Orders",
          route: "dummy/all_orders"
        },
            {
          icon: require('../assets/icons/pending-orders.png'),
          name: "Pending Orders",
          route: "dummy/pending_orders"
        },
            {
          icon: require("../assets/icons/reconciled-orders.png"),
          name: "Reconciled Orders",
          route: "dummy/reconciled_orders"
        },
        ]
    },
    {
        title: "",
        items: [{
          icon: require("../assets/icons/merchant-profile.png"),
          name: "Merchant Profile",
          route: "dummy/merchant_profile"
        },]
    },
]
